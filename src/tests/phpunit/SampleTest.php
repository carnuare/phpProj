<?php 
// TEST UNITARIO DE EJEMPLO
use PHPUnit\Framework\TestCase;


class SampleTest extends TestCase{

    public function test_sample(){
        require "Sample.php";
        $test = new Person();
        $this->assertEquals('Hello World', $test->greeting());
    }
}