# Blockchain-Wallet-API
![alt img](https://www.tibco.com/blog/wp-content/uploads/2018/02/enterprise-blockchain.png)<br>

### Cryptocurrency
* A cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.
* Dealing with cryptocurrency needs to be highly secured and non-hackable so using blockchain technology and cryptocurrency we propose to develop a system which aim to successfully design a secure cryptocurrency transaction platform using SHA-256 Algorithm. 

<b>A research paper on this project is accepted in SPIN 2018 Conference and selected for the publication in IEEE [link](https://ieeexplore.ieee.org/document/8711727) </b>

### Algorithms Used
(1) SHA256 :Secure Hash Algorithm 256 represents the number of bits of which the unique hashcode will be generated. It is a cryptographic hash function with digest length of 256 bits. It is a keyless hash function. The hash begins with the number of 0 bits. <br/>
(2) SECP256K1 : Standards of efficient cryptography. P stands for prime. 256 represents the key component which is a prime number to generate the curve. K represents the initial letter of some eminent mathematician’s name. 1 here implies that it’s the first implementation of the code algorithm. It is a pure SECG curve. It is constructed in a special non-random way which allows for especially efficient computation.

### How to run your application
Install the dependencies
```sh
npm install
```
### Running all test cases

```sh
npm run test
```

### Running the application

```sh
# Starting first peer
npm run dev

# Starting second peer
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev

# Starting third peer
HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev
```
