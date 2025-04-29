tell me about addressing

Addressing in computer networks, especially at the transport layer, is the method used to deliver data from one specific process on a host to another specific process on a different host. It involves two key identifiers at each end of the communication:

### 1. **IP Address**
- Identifies the **host** (computer or device) uniquely on the network.
- Used by the network layer to deliver packets from one host to another.
- Example: 192.168.1.1

### 2. **Port Number**
- Identifies the **process** (application or service) running on the host.
- Used by the transport layer to distinguish among multiple processes running on the same host.
- It is a 16-bit number ranging from 0 to 65535.
- Port numbers allow multiplexing and demultiplexing of data to/from applications.
  
### Combination: **Socket Address**
- A socket address is the combination of an IP address and a port number.
- Example: `192.168.1.1:80` (IP address + port 80, typically for HTTP server).
- Both client and server have socket addresses to uniquely identify the communicating processes.

---

### Port Number Categories
- **Well-known Ports (0–1023):** Reserved for common services (e.g., HTTP on 80, FTP on 21, DNS on 53).
- **Registered Ports (1024–49151):** Assigned to specific services by IANA but not tightly controlled.
- **Dynamic or Ephemeral Ports (49152–65535):** Used temporarily by client processes when initiating communication.

---

### How Addressing Works in Process-to-Process Communication
- When a client wants to communicate with a server, it sends data to the server's IP address and **well-known port number**.
- The client itself uses an ephemeral port number assigned by its transport layer to identify its process.
- The transport layer at the receiver uses the destination port number to deliver the data to the correct process.
- The source port number is used by the receiver to send responses back to the correct client process.

---

### Role in Multiplexing and Demultiplexing
- **Multiplexing:** At the sender, multiple processes send data which the transport layer combines into segments tagged with their source port numbers.
- **Demultiplexing:** At the receiver, the transport layer uses the destination port number in the segment header to deliver data to the correct process.

---

### Summary
- Addressing ensures that data sent over a network reaches the correct application process on the correct host.
- IP addresses identify hosts; port numbers identify processes on those hosts.
- The pair (IP address + port number) forms a socket address, uniquely identifying each endpoint of communication.
- This addressing scheme supports simultaneous communication between multiple processes on the same or different hosts.

This addressing mechanism is fundamental to protocols like TCP and UDP, enabling reliable and organized process-to-process communication over the Internet[2][3][4][6].

Citations:
[1] updated-22a-Process-to-process-delivery-UDP-and-TCP-121-slides.pptx https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/11353356/a40c926e-1b1c-4ca5-a1bf-38cbe6f04c93/updated-22a-Process-to-process-delivery-UDP-and-TCP-121-slides.pptx
[2] Process to Process Delivery in Transport Layer - BrainKart https://www.brainkart.com/article/Process-to-Process-Delivery-in-Transport-Layer_13484/
[3] Transport Layer port number - NetworkLessons Notes https://notes.networklessons.com/transport-layer-port-number
[4] Socket addresses - Network Programming http://networkprogrammingnotes.blogspot.com/p/socket-addresses.html
[5] Lecture 4.1 Transport Layer - Process-to-Process Delivery - Scribd https://www.scribd.com/presentation/661812269/Lecture-4-1-Transport-Layer-Process-to-Process-Delivery
[6] [PDF] UNIT - 5 https://www.pvpsiddhartha.ac.in/dep_it/lecture%20notes/DCCN/UNIT%205.pdf
[7] IANA Allocation Guidelines for TCP and UDP Port Numbers - IETF https://www.ietf.org/archive/id/draft-cotton-tsvwg-iana-ports-00.html
[8] [PDF] UNIT – IV : TRANSPORT LAYER 1. INTRODUCTION http://dsengg.ac.in/pdf/cse/U20CS404%20-%20CN%20UNIT%204%20NOTES.pdf
[9] TCP/IP Ports: Transport Layer (TCP/UDP) Addressing http://www.tcpipguide.com/free/t_TCPIPPortsTransportLayerTCPUDPAddressing.htm
[10] Common Ports for TCP & UDP Network Communication - Netwrix Blog https://blog.netwrix.com/common-ports
[11] Understanding sockets concepts - IBM https://www.ibm.com/docs/en/zos/2.4.0?topic=concepts-understanding-sockets
[12] IANA Service Name and Transport Protocol Port Number Registry https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
[13] [Solved] Which of the following is required for process-to-process de https://testbook.com/question-answer/which-of-the-following-is-required-for-process-to--63aea5b9b382478bee2e3513
[14] [PDF] TRANSPORT LAYER https://www.lkouniv.ac.in/site/writereaddata/siteContent/202003291621085570shruti_saxena_engg_COMPUTER_NETWORK_3.pdf
[15] TCP/UDP port number ranges https://arubanetworking.hpe.com/techdocs/AOS-S/16.10/ATMG/WB/content/common%20files/tcp-por-num-ran.htm
[16] Socket address structure - IBM https://www.ibm.com/docs/en/i/7.4?topic=characteristics-socket-address-structure
[17] Application for Service Names and User Port Numbers https://www.iana.org/form/ports-services
[18] What is transport layer? – TechTarget Definition https://www.techtarget.com/searchnetworking/definition/Transport-layer
[19] [PDF] Process-to-Process Delivery: UDP, TCP, and SCTP https://ggnindia.dronacharya.info/CSE/Downloads/SubInfo/6thSem/PPT/ComputerNetworks/Section-2/Lecture7.pdf
[20] [PDF] Chapter 23 Process-to-Process Delivery: UDP, TCP https://myethiolectures.files.wordpress.com/2015/02/transport_layer-protocols.pdf
[21] List of TCP and UDP port numbers - Wikipedia https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
