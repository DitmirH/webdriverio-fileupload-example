# setup
Install packages :
`npm i`

# Workspace directories
[features/]- holds the feature files , page objects , utils and step definitions 
[features/utils] - set of re-usable functions that can be used throughout any of the tests
[test_files/] the set of test data / files needed for the tests 

# run tests 
`npm run test:all`  - will test all your test suites except any test tagged '@ignore' and '@todo'
`npm run test:feature:anonymousuploads` - will tests a particular feature or subset of tagged tests , in this we are testing the anonymous uploads feature

# generate reports
After tests have finished executing , run the following command to generate and open the report :
`npm run allure:report`



