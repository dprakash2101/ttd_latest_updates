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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>62</td><td>For selected list of Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban & Rural) and Tirumala Locals,
Please [Click Here](https://ttdevasthanams.ap.gov.in/misc/images/v4/Angapradakshinam_DIP_Results_27-02-2025%20(1).pdf)
 
The selected pilgrims shall pay a deposit amount of Rs. 500/- before 12:00 PM on 28.02.2025, to confirm their Angapradakshinam Seva</td><td>AGP_Local</td><td>false</td><td>N/A</td></tr><tr><td>42</td><td>TTD - Local Temples Seva Quota for March-2025 will be available for booking w.e.f 25.02.2025 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>local temples</td><td>true</td><td>N/A</td></tr><tr><td>54</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of March-2025 have been completed.</td><td>Homam</td><td>true</td><td>N/A</td></tr><tr><td>53</td><td>Tirumala and Tirupati Accommodation Quota for May-2025 will be available for booking w.e.f. 24.02.2025, 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>ACC</td><td>true</td><td>N/A</td></tr><tr><td>55</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for March-2025 will be available for booking w.e.f, 24.02.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>SED (PAT)</td><td>true</td><td>N/A</td></tr><tr><td>50</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for May-2025 will be available for booking w.e.f. 21.02.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>51</td><td>Special Entry Darshan (Rs.300) tickets for May-2025 have been completed.</td><td>SED (SRI TT)</td><td>null</td><td>N/A</td></tr><tr><td>52</td><td>Senior Citizens / Physically challenged quota for May-2025 has been completed.</td><td>PLD</td><td>null</td><td>N/A</td></tr><tr><td>49</td><td>Tirumala Angapradakshinam tokens for May-2025 have been completed.</td><td>APD</td><td>null</td><td>N/A</td></tr><tr><td>48</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for May-2025 has been completed.</td><td>Arjitha Seva</td><td>null</td><td>N/A</td></tr><tr><td>47</td><td>Total number of Seva E - Dip Registrations received for May-2025 Srivari Arjitha Sevas :
- Thomalaseva: **382498**
- Archana: **377458**
- Astadala Pada Padmaradhana: **362202**
- Suprabhatham: **417854**

For Selected List [Click here](https://ttdevasthanams.ap.gov.in/misc/images/v4/2025_02_20_EDIP_SELECTIONS.pdf)
</td><td>EDIP</td><td>false</td><td>N/A</td></tr><tr><td>61</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of MAY – 2025 & Darshan quota of blocked dates in the month of APRIL - 2025 will be available for booking w.e.f 22.02.2025 from 11:00 AM onwards</td><td>SRIVANI TRUST</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
