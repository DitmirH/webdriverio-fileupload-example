@anonymouseUploads
Feature: Anonymous user transfers

Background: Navigate to main file upload page
    Given I am on the homepage page
    And I select 'Get transfer link' in the transfer options

  Scenario: Upload a single supported file
    And I fill in the message area 'Test - Upload single file'
    And I select a single file to upload 'file-sample_100kB.doc'
    Then The transfer completed successfully
    And The transfer link is generated

  Scenario: Upload multiple supported files
    And I fill in the message area 'Test - Upload multiple files'
    And I upload the following files
    |file_example_MP4_1920_18MG.mp4 |
    |file-sample_1MB.rtf            |
    |file_example_XLS_5000.xls      |
    |file_example_favicon.ico       |
    Then The transfer completed successfully
    And The transfer link is generated

# in Examples , add as many types of file extensions as you like
# as long as the file exists in ./test_files/ folder , it will run the tests
Scenario Outline: Upload different file types <filetype>
    And I fill in the message area 'Test - file type download'
    And I select a single file type to upload '<extension>'
    Then The transfer completed successfully
    And The transfer link is generated
    
    Examples:
    | filetype                 | extension    |
    |    DOC                   |   .doc        |   
    |    Rich text format      |   .rtf        |
    |    ZIP                   |   .zip        |   
    |    PDF                   |   .pdf        |  
    |    ODT                   |   .odt        |   
    |    CSV                   |   .csv        |  
    |    MP4                   |   .mp4        |  
    |    MP3                   |   .mp3        | 
    |    Excel XML spreadsheet |   .xlsx       |  


@ignore @todo
  Scenario: Uploading a single unsupported file should return an error
    And I fill in the message area 'Test - Unsupported file'
    And I select a single file to upload 'UNSUPPORTEDFILE.JKMSBD'
    Then The transfer completed unsuccessfully

  # Tests here are for registered users , 
  # tests will be moved to another feature file for registered user journeys
  @ignore @todo
  Scenario: Upload a single unsupported file as a registered user
    And I fill in the email fields
    |field     | email value            |
    |Email to  | ditmirhasani@gmail.com |
    |Your email| ditmir_h@hotmail.co.uk |
    And I select a single file to upload 'file-sample_100kB.doc'
    Then The transfer completed successfully
    And The transfer link is generated

