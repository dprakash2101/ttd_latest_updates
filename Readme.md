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
<table><thead><tr><th>ID</th><th>Tag</th><th>Data</th><th>Published At</th></tr></thead><tbody><tr><td>40</td><td>Seva DIP Registrations Count</td><td>Seva DIP Selected Count:
Total number of Registrations received for November-2024 Srivari Arjitha Seavs:
Thomalaseva: **325033**
Archana: **319620**
Astadala Pada Padmaradhana: **308946**
Suprabhatham: **357186**
</td><td>2024-08-21T05:15:03.068Z</td></tr><tr><td>42</td><td>Pushpayagam - Sri TT</td><td>The periodical seva "Pushpayagam" in Srivari Temple, Tirumala will be conducted from 09.11.2024, seva tickets will be available for booking w.e.f 22.08.2024 at 10.00AM</td><td>2024-08-08T10:24:21.448Z</td></tr><tr><td>50</td><td>Arjitha Sevas (Sri TT)</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for November-2024 will be available for booking w.e.f. 22.08.2024 10:00 AM. Please [Click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&flow=arjitha-seva)
</td><td>2024-08-14T10:49:13.083Z</td></tr><tr><td>52</td><td>Arjitha Sevas (Virtual)</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanotsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for November-2024 will be available for booking w.e.f. 22.08.2024 3:00 PM.
Please [click here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>2024-08-13T12:08:50.590Z</td></tr><tr><td>53</td><td>Angapradakshinam</td><td>Tirumala Angapradakshinam tokens for November-2024 will be available for booking w.e.f. 23.08.2024 10:00 AM. Please [click here](/apd/slot-booking?flow=apd&flowIdentifier=apd)</td><td>2024-08-14T10:50:43.666Z</td></tr><tr><td>54</td><td>SRIVANI Trust</td><td>Darshan & Accommodation Quota of SRIVANI Trust Donors for the month of NOVEMBER 2024 will be available for booking w.e.f 23. 08. 2024 (Friday) from 11:00 AM onwards.</td><td>2024-08-19T08:22:53.620Z</td></tr><tr><td>56</td><td>PLD</td><td>Senior Citizens / Physically challenged quota for November-2024 will be available for booking w.e.f. 23.08.2024 3:00 PM.
Please [click here](/pld/slot-booking?flow=pld&flowIdentifier=pld)</td><td>2024-08-19T12:19:33.799Z</td></tr><tr><td>57</td><td>Special Entry Darshan, Sri TT</td><td>Special Entry Darshan (Rs.300) tickets of Srivari Temple, Tirumala for the month of November -2024 will be available for booking w.e.f.24.08.2024 10:00 AM. Please [click here](/slot-booking?flow=sed&flowIdentifier=sed)</td><td>2024-08-19T12:20:25.094Z</td></tr><tr><td>58</td><td>Accommodation</td><td>Tirumala and Tirupati Accommodation Quota for November 2024 will be available for booking w.e.f. 24.08.2024 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>2024-06-12T11:22:06.189Z</td></tr><tr><td>59</td><td>N/A</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook).</td><td>2023-11-22T14:20:06.620Z</td></tr><tr><td>60</td><td>N/A</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>2023-11-22T14:20:16.980Z</td></tr><tr><td>64</td><td>Donor Self Service</td><td>To enable self service for the existing donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice).</td><td>2024-01-16T05:12:09.518Z</td></tr><tr><td>65</td><td>Special Entry Darshan, Sri PAT</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for September-2024 will be available for booking w.e.f, 24.08.2024 10:00 AM. Please [click here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>2024-02-24T06:50:05.802Z</td></tr><tr><td>66</td><td>Local Temples Arjitha Sevas</td><td>TTD - Local Temples Arjitha Sevas Quota for September -2024 will be available for booking w.e.f. 26.08.2024 10:00 AM.
Please [click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>2024-06-12T11:22:52.407Z</td></tr><tr><td>67</td><td>Homam</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of September 2024 will be available for booking w.e.f. 26.08.2024 10.00AM. Please [click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sapthagiri%20Gau%20Pradakshina%20Shala&sevaName=Sri%20Srinivasa%20Divyaanugraha%20Homam)</td><td>2024-08-20T09:00:36.812Z</td></tr><tr><td>68</td><td>Darshan And Accommodation for Trusts</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of OCTOBER - 2024 will be available for booking w.e.f 29.07.2024 (Monday) from 11:30 AM onwards.</td><td>2024-05-25T06:41:29.714Z</td></tr></tbody></table>
