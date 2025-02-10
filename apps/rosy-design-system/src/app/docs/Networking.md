Cold War between Russia and United states whos is number 1, interms of sending satelight to Sky
Russia Won
Now US don't want to lost anymore so they inveted ARPHA to research they invented internet to share information
between university uta,standford,etc.(using tcp)

As area extedned tcp/ip emerged. now they have propblem with sharing document where one reference to another document.
To solve that issue tim burners inveted www.hyptertext which allows documents to linked together through hyperlink

Protocols Used by the WWW:
The WWW relies on protocols like HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) to facilitate communication between your browser and web servers.







Http
 Defines the format and rules for making requests (e.g., requesting a webpage) and receiving responses (e.g., sending back the requested content, like HTML or JSON)


TCP/IP - It is application layer
It is responsible for how data is send and received over the network.
The TCP/IP ensures that data is broken down into packets, routed to the correct destination and reassembled in the right order.



class ChromeBrowser{
  thread(){

  } 
  process(){

  }
}

class ChromeBrowser {

  // This method represents the user making a request (e.g., typing a URL)
  http() {
    console.log("Sending request...");
    this.tcp_ip(); // This calls the TCP/IP system to handle the low-level data transfer
  }

  // This method represents the transfer of data (postage and routing)
  tcp_ip() {
    console.log("Transfer data using TCP/IP...");
    this.breakDataIntoPackets();
    this.routeToCorrectDestination();
  }

  // This method represents the postal system breaking down the data into smaller packages
  breakDataIntoPackets() {
    console.log("Breaking data into smaller packets...");
  }

  // This method represents the routing system ensuring the packets reach the correct destination
  routeToCorrectDestination() {
    console.log("Routing packets to the correct destination...");
  }
}

const browser = new ChromeBrowser();
browser.http();  // The user sends a request, which triggers the data transfer process



When we type google first browser need to find ip address of google to send data.
DNS lookup:browser asks os to find ip.


An application (e.g., a web browser) requests the OS to resolve a domain name (e.g., example.com) to an IP address
This query is sent over the TCP/IP protocol suite, which is the foundation of internet communication.


    The browser delegates this task to the OS by calling system APIs like:

    getaddrinfo() (on Unix-like systems)

    gethostbyname() (older systems)
    OS Checks Local Cache

Network Communication
  Once the browser has the IP address, it needs to establish a network connection to the server.

  The browser uses OS-provided socket APIs to create and manage network connections:

  socket(): Creates a socket for communication.

  connect(): Establishes a connection to the server.

  send() and recv(): Send and receive data over the connection.

  The OS handles the low-level networking tasks, such as:

  Managing TCP/IP connections.

  Handling packet routing.

  Encrypting data (e.g., using TLS/SSL for HTTPS).

How do we know what Os featuers uses tcp/ip?

any features that requires communication over network likely rely on tcp/ip

Protocols in networking often depend on or use other protocols to function. This is because networking is built on a layered architecture, where each layer provides specific services to the layer above it


Application layer protocols (e.g., HTTP, FTP, DNS) rely on transport layer protocols (e.g., TCP, UDP).

Transport layer protocols rely on network layer protocols (e.g., IP).

Network layer protocols rely on data link layer protocols (e.g., Ethernet, Wi-Fi).


nslookup
A command-line tool to query DNS servers and troubleshoot DNS issues.

Example:
nslookup www.example.com


A more advanced DNS lookup tool that provides detailed information about DNS queries and responses.

Example:
dig www.example.com
