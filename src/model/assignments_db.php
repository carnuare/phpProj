<?php 

    function get_assignments_by_course($course_id) {
        global $db;

        //LIST
        if ($course_id) {
            $query = 'SELECT A.ID, A.Description, C.courseName FROM assignments A LEFT JOIN courses C ON A.courseID = C.courseID WHERE A.courseID = :course_id ORDER BY ID';
            //cuando tenemos un ID: unimos columnas de assignment con el nombre del curso al que pertenece (devuelve 1)
        } else {
            $query = 'SELECT A.ID, A.Description, C.courseName FROM assignments A LEFT JOIN courses C ON A.courseID = C.courseID ORDER BY C.courseID';
            //devuelve todos los assignments
        }
        $statement = $db->prepare($query);
        $statement->bindValue(':course_id', $course_id);
        $statement->execute();
        $assignments = $statement->fetchAll(); //lo que devuelve la consulta va a $assignments
        $statement->closeCursor();
        return $assignments;
    }

    function delete_assignment($assignment_id) {
        global $db;
        $query = 'DELETE FROM assignments WHERE ID = :assign_id';
        $statement = $db->prepare($query);
        $statement->bindValue(':assign_id', $assignment_id);
        $statement->execute();
        $statement->closeCursor();
    }

    function add_assignment($course_id, $description) { //para crear una nueva assignment necestiamos crear tambien un curso
        global $db;
        $query = 'INSERT INTO assignments (Description, courseID)
              VALUES
                 (:descr, :courseID)';
        $statement = $db->prepare($query);
        $statement->bindValue(':descr', $description);
        $statement->bindValue(':courseID', $course_id);
        $statement->execute();
        $statement->closeCursor();
    }