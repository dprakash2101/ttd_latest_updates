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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>45</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors “VAIKUNTA DWARA DARSHANAM” i.e., from 10.01.2025 to 19.01.2025 will be available for booking w.e.f 27.12.2024 from 11:00 AM onwards. Accommodation has been BLOCKED from 08. 01. 2025 to 11. 01. 2025.</td><td>Trusts and Schemes - VKD </td><td>null</td><td>N/A</td></tr><tr><td>46</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of MARCH - 2025 will be available for booking w.e.f 28.12.2024 from 11:30 AM onwards</td><td>Schemes and Trusts</td><td>null</td><td>N/A</td></tr><tr><td>39</td><td>Tirumala and Tirupati Accommodation Quota for March-2025 is available for booking w.e.f. 26.12.2024 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>Accommodation</td><td>true</td><td>N/A</td></tr><tr><td>44</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for January-2025 is available for booking w.e.f, 26.12.2024, 11:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>SPAT </td><td>true</td><td>N/A</td></tr><tr><td>42</td><td>TTD - Local Temples Seva Quota for January-2025 is available for booking w.e.f 25.12.2024 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>local temples</td><td>true</td><td>N/A</td></tr><tr><td>21</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for March-2025 is available for booking w.e.f. 21.12.2024 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>40</td><td>Special Entry Darshan (Rs.300) tickets for March-2025 have been completed.</td><td>Special Entry Darshan (Rs.300)</td><td>null</td><td>N/A</td></tr><tr><td>43</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of January-2025 have been completed.</td><td>homam</td><td>null</td><td>N/A</td></tr><tr><td>33</td><td>Senior Citizens / Physically challenged quota for March-2025 have been completed.</td><td>Senior Citizens / Physically challenged</td><td>null</td><td>N/A</td></tr><tr><td>38</td><td>Special Entry Darshan (Rs.300) tickets for Vaikunta Dwara Darshan from 10.01.2025 to 19.01.2025 have been completed.</td><td>Special Entry Darshan (Rs.300) tickets for Vaikunta Dwara Darshan</td><td>null</td><td>N/A</td></tr><tr><td>36</td><td>Darshan quota for Vaikunata Dwara Darshanam from 10-01-2025 to 19-01-2025 to the SRIVANI Trust Donors will be available for booking w.e.f. 23.12.2024, 11:00 AM
 [Click Here](https://tirupatibalaji.ap.gov.in/#/loginTimer)</td><td>SRIVANI Trust VKD</td><td>null</td><td>N/A</td></tr><tr><td>18</td><td>Tirumala Angapradakshinam tokens for March-2025 have been completed.</td><td>Angapradakshinam</td><td>null</td><td>N/A</td></tr><tr><td>41</td><td>Darshan and Accommodation quota for March-2025 to the SRIVANI Trust Donors will be available for booking w.e.f. 25.12.2024, 11:00
AM</td><td>SRIVANI Trust Donors</td><td>null</td><td>N/A</td></tr><tr><td>23</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for March-2025 have been completed.</td><td>Srivari Arjitha Seva</td><td>null</td><td>N/A</td></tr><tr><td>37</td><td>The tickets quota for periodical seva Float Festival in srivari Temple, Tirumala from 09.03.2025 to 13.03.2025 have been completed.</td><td>Float festival</td><td>null</td><td>N/A</td></tr><tr><td>16</td><td>Total number of Seva E - Dip Registrations received for March-2025 Srivari Arjitha Sevas and click below for selected list:
- Thomalaseva: **347123**
- Archana: **341557**
- Astadala Pada Padmaradhana: **328316**
- Suprabhatham: **377835**

[Click Here](https://ttdevasthanams.ap.gov.in/misc/images/v4/2024_12_20_EDIP_SELECTIONS.pdf)</td><td>Seva E-dip</td><td>false</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
