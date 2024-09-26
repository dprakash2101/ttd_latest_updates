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
<table><thead><tr><th>ID</th><th>Tag</th><th>Data</th><th>Published At</th></tr></thead><tbody><tr><td>40</td><td>Local Temples </td><td>TTD - Local Temples Seva Quota for October-2024 will be available for booking w.e.f 25.09.2024 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>2024-09-25T03:35:10.189Z</td></tr><tr><td>46</td><td>Angapradakshinam seva e-dip</td><td>Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban and Rural) and Tirumala locals (only) for 28.09.2024 have been closed.</td><td>2024-09-25T08:58:43.327Z</td></tr><tr><td>48</td><td>Sed (tt)</td><td>Special Entry Darshan (Rs.300) tickets for December-2024 have been closed </td><td>2024-09-25T03:36:23.517Z</td></tr><tr><td>49</td><td>SED (pat)</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for October-2024 will be available for booking w.e.f, 24.09.2024 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>2024-09-25T03:36:27.709Z</td></tr><tr><td>50</td><td>Accommodation</td><td>Tirumala and Tirupati Accommodation Quota for December-2024 have been closed.</td><td>2024-09-25T03:36:32.155Z</td></tr><tr><td>52</td><td>Arjitha Sevas (Virtual)</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanotsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for December - 2024 will be available for booking w.e.f. 21.09.2024 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>2024-09-18T07:02:00.956Z</td></tr><tr><td>53</td><td>Angapradakshinam</td><td>Tirumala Angapradakshinam tokens for December-2024 have been closed.</td><td>2024-09-25T03:36:36.485Z</td></tr><tr><td>54</td><td>SRIVANI Trust</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of DECEMBER - 2024 will be available for booking w.e.f 23.09.2024 from 11:00 AM onwards</td><td>2024-09-20T03:32:06.890Z</td></tr><tr><td>56</td><td>PLD</td><td>Senior Citizens / Physically challenged quota for December-2024 have been closed.</td><td>2024-09-25T03:36:40.906Z</td></tr><tr><td>57</td><td>Arjitha seva (tt)</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for December-2024 have been closed </td><td>2024-09-25T03:36:46.745Z</td></tr><tr><td>58</td><td>Homam</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of October 2024 have been closed.</td><td>2024-09-25T09:01:06.376Z</td></tr><tr><td>59</td><td>N/A</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook).</td><td>2023-11-22T14:20:06.620Z</td></tr><tr><td>60</td><td>N/A</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>2023-11-22T14:20:16.980Z</td></tr><tr><td>64</td><td>Donor Self Service</td><td>To enable self service for the existing donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice).</td><td>2024-01-16T05:12:09.518Z</td></tr><tr><td>68</td><td>Darshan And Accommodation for Trusts</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of DECEMBER - 2024 will be available for booking w.e.f 24.09.2024 from 11:30 AM onwards</td><td>2024-09-03T10:41:08.006Z</td></tr></tbody></table>
