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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>106</td><td>SRIVANI Trust (Rs.10,000/-) Current booking Break Darshan tickets (800 Nos. per day) will be available through online mode every day from 09:00 AM to 02:00 PM for same-day darshan at 4:00 PM, with effect from 09.01.2026</td><td>Srivani Trust Online</td><td>false</td><td>N/A</td></tr><tr><td>137</td><td>Angapradakshinam Seva e-DIP ticket registrations for Tirupati (Urban & Rural), Tirumala, Chandragiri Mandal and Renigunta Mandal locals (only) for 17.01.2025 (Saturday) will be available between 10:00 a.m. and 4:00 p.m. on 15.01.2025.  Please [Click Here](/agp/dashboard?flow=agp&flowIdentifier=agp)</td><td>Angapradakshinam Local</td><td>true</td><td>N/A</td></tr><tr><td>76</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for January-2026 will be available for booking w.e.f, 24.12.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>Special Entry Darshan (Sri PAT)</td><td>true</td><td>N/A</td></tr><tr><td>95</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for March-2026 will be available for booking w.e.f. 22.12.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>112</td><td>Total number of Seva E - Dip Registrations received for December-2025 : 

-  Thomalaseva:  **648013**
-  Archana:  **639416**
-  Astadala Pada Padmaradhana:  **596010**
- Suprabhatham: **717108**

For selected list, please [Click Here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/PROD_DIP_SELECTION_2025_12_20_2025_12_20_EDIP_SELECTIONS.pdf?updated_at=2025-12-20T05:11:33.105Z)
 </td><td>Seva E-Dip</td><td>false</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
