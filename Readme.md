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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>32</td><td>For selected Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban and Rural) and Tirumala locals,
Please [Click Here](https://ttdevasthanams.ap.gov.in/misc/images/v4/Angapradakshinam_DIP_Results_12-12-2024.pdf)


The selected pilgrims shall pay a deposit amount of Rs. 500/- before 12:00 PM on 13.12.2024, to confirm their Angapradakshinam Seva.</td><td>AGP LOCAL</td><td>false</td><td>N/A</td></tr><tr><td>30</td><td>TTD - Local Temples Seva Quota for December-2024 will be available for booking w.e.f 26.11.2024 at 10:00 AM.
Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>Local Temples</td><td>true</td><td>N/A</td></tr><tr><td>26</td><td>Tirumala and Tirupati Accommodation Quota for February-2025 will be available for booking w.e.f. 25.11.2024 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>ACC</td><td>true</td><td>N/A</td></tr><tr><td>25</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for December-2024 will be available for booking w.e.f, 25.11.2024 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>SED PAT</td><td>true</td><td>N/A</td></tr><tr><td>21</td><td>The Online seva (Virtual Participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas for Srivari Temple, Tirumala for February - 2025 will be available for booking w.e.f. 21.11.2024 03:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>31</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of December-2024 have been closed .</td><td>Homam</td><td>null</td><td>N/A</td></tr><tr><td>24</td><td>Special Entry Darshan (Rs.300) tickets for February-2025 have been closed.</td><td>SED</td><td>true</td><td>N/A</td></tr><tr><td>22</td><td>Senior Citizens / Physically challenged quota for February-2025 have been closed.</td><td>PLD</td><td>true</td><td>N/A</td></tr><tr><td>18</td><td>Tirumala Angapradakshinam tokens for February-2025 have been closed.</td><td>Angapradakshinam</td><td>null</td><td>N/A</td></tr><tr><td>23</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for February-2025 have been closed.</td><td>Srivari Arjitha Seva</td><td>null</td><td>N/A</td></tr><tr><td>16</td><td>Total Registrations received for February-2025 Srivari Arjitha Sevas:
- Thomalaseva: **330393**
- Archana: **325756**
- Astadala Pada Padmaradhana: **310710**
- Suprabhatham: **360370**

For Selected List [Click here](https://ttdevasthanams.ap.gov.in/misc/images/v4/2024_11_20_EDIP_SELECTIONS.pdf)

</td><td>Seva E-dip</td><td>true</td><td>N/A</td></tr><tr><td>27</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of February - 2025 will be available for booking w.e.f 23.11.2024 from 11:00 AM onwards.</td><td>Srivani trust</td><td>null</td><td>N/A</td></tr><tr><td>29</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of FEBRUARY - 2025 will be available for booking w.e.f 24.11.2024 from 11:30 AM onwards</td><td>Schemes and Trusts</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
