To run the tests, in this directory run:

testcafe firefox:headless test.js --video artifacts/videos --video-options  pathPattern=failure_$(date -u +%F).mp4,failedOnly=true,singleFile=true