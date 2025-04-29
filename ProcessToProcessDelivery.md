# Addressing

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


