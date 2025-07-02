
Implement a Search Bar on #file:HeaderBar.jsx 

Technical Requirements
    API Integration
    Endpoint: /destinations.json
    Method: GET
    Expected Response: JSON array of destination objects matching search criteria


Search Capabilities

    search should load data from API, it returns an array using this pattern:
    [
    {
    "id": 1,
    "city": "Paris",
    "country": "France"
    }
    ]

Design requirements:

    - search bar should be nested on a bootstrap navbar
    - Input field should be styled with Bootstrap and have a placeholder "Search..."
    - The dropdown should float over the content and show matching results
    - search bar should be  inside the navbar, aligned to the right
    - Search field and buttons should not be transparent. 
    - align the search bar to the right side of the navbar
    


Acceptance Criteria

    Core Functionality

    Text input field accepts alphanumeric characters and common punctuation
    Search is triggered when user presses Enter or clicks search button
    Partial matches are supported (e.g., "par" matches "Paris")
    Search is case-insensitive and trims whitespace
    Empty search query returns all available destinations
