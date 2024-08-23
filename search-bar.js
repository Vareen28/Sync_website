const companies = [
    { name: "Apple", details: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California." },
    { name: "Google", details: "Google LLC is an American multinational technology company that specializes in Internet-related services and products." },
    { name: "Microsoft", details: "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington." },
    { name: "Amazon", details: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington." },
    { name: "Facebook", details: "Facebook, Inc. is an American multinational technology conglomerate based in Menlo Park, California." },
    { name: "Tesla", details: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California." },
    { name: "Netflix", details: "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California." },
    { name: "IBM", details: "International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York." },
    { name: "Intel", details: "Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California." },
    { name: "Oracle", details: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas." }
];

function searchCompany() {
    const searchInput = document.getElementById("company-search").value.toLowerCase();
    const companyDetailsDiv = document.getElementById("company-details");

    // Clear previous results
    companyDetailsDiv.innerHTML = "";

    // Find the company that matches the search query
    const company = companies.find(c => c.name.toLowerCase().includes(searchInput));

    // Display the company details if found
    if (company){
        companyDetailsDiv.innerHTML = `<h3>${company.name}</h3><p>${company.details}</p>`;
         }else if (searchInput) {
        companyDetailsDiv.innerHTML = "<p>No company found.</p>";
         }
        }