# TTD Web Scraper API

API for scraping latest updates from TTD website.

## Description

This API serves as a gateway to retrieve real-time updates from the Tirumala Tirupati Devasthanams (TTD) website. It provides endpoints that scrape data directly from the official website, transforming it into structured JSON format for consumption by applications.

### Key Features

- **Real-time Updates:** Fetch the latest information as soon as it is published on the TTD website.
- **Structured JSON:** Data is delivered in a structured format, ready for integration with various applications and systems.
- **Automated Readme Updates:** Whenever new data is fetched, the API automatically updates the "Latest Updates" section in the Readme.md file of your repository. This ensures that users are always informed about the most recent changes.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dprakash2101/ttd-web-scraper.git
```

2. Install Depedencies

```bash
cd ttd-web-scraper
npm install
```

3. Start The server:

```bash
npm start
```



## Usage

You can access the latest updates from the TTD website through the following endpoints:

- **Get Latest Updates:**  
  Endpoint: `https://ttd-latest-updates-latest.onrender.com/latest-updates`  
  Method: `GET`  
  Description: Fetches the latest updates from the TTD website.

### Example
Postman:
```bash
curl https://ttd-latest-updates-latest.onrender.com/latest-updates
```
#### For Browser:
 [Clickhere](https://ttd-latest-updates-latest.onrender.com/latest-updates)

 #### For Swagger File
 [Clickhere](https://ttd-latest-updates-latest.onrender.com/api-docs/)


To access the latest updates data in your local host, make a GET request to the following endpoint:

```bash
http://localhost:3000/latest-updates
```
This endpoint will return a JSON array containing the latest updates from the TTD website.

To explore the API further and view the available endpoints, you can access the Swagger documentation at:

```bash
http://localhost:3000/api-docs/
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[Devi Prakash Kandikonda](https://github.com/dprakash2101)

## Latest Updates
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>67</td><td>For selected list of Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban & Rural) and Tirumala Locals, Please [Click Here](https://ttdevasthanams.ap.gov.in/misc/images/v4/Angapradakshinam_DIP_Results_08-05-2025.pdf?updated_at=2025-05-08T10:44:30.240Z) . The selected pilgrims shall pay a deposit amount of Rs. 500/- before 12:00 PM on 09.05.2025, to confirm their Angapradakshinam Seva.</td><td>Angapradakshinam Seva tickets eDip registrations</td><td>false</td><td>N/A</td></tr><tr><td>66</td><td>Om Namo Venkatesaya -
The Online quota of General Srivari Seva for Tirumala and Tirupati for the month of June - 2025 will be released at 11 AM, Navaneetha Seva at 12 Noon, Parakamani Seva at 1 PM and Senior Seva(Group Leader) at 2 PM for Tirumala on 30-04-2025.</td><td>Srivari Seva</td><td>null</td><td>N/A</td></tr><tr><td>61</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of JULY – 2025 will be available for booking w.e.f 23.04.2025 from 11:00 AM onwards.</td><td>SRIVANI TRUST</td><td>null</td><td>N/A</td></tr><tr><td>65</td><td>Darshan & Accommodation Quota to the Trusts/Schemes Donors for the month of JUNE–2025 will be available for booking w.e.f 26. 03. 2025 from 11:30 AM onwards</td><td>Trusts/Schemes Donors</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
