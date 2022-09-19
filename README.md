# Xiomi-Ode2Code-2.0  
This documentation is for Desktop App.  
For full code zip files and demo videos visit: https://drive.google.com/drive/folders/1XGIicLEaUv1tK6gFIdXLAgyvcgpYG5lb?usp=sharing   
> App is made using Electronjs framework. 
## Steps:  
1) Download all the codes from this repository.  
2) Run the following commands:  
- `npm install electron --save --def`  
- `npm install boxicons --save`  
- `npm install node-fetch`  
- `npm i browserify -g`  
3) After installing all the mentioned commands, run `npm start`.
4) App will start in a desktop window.
5) Login using:
- ID: `xiomi`
- Password: `ode2code`  
  
> About the Application: 
- Vendor wll login using the given id and password.
![Screenshot (31)](https://user-images.githubusercontent.com/39340406/191013690-91d11878-ad5c-4685-a7ad-8d393164f6c0.png)
- All the products offered by Xiomi will display. He can search products by name and filters like color, storage.
![Screenshot (32)](https://user-images.githubusercontent.com/39340406/191015638-8a320085-7d3d-48d7-b36d-806081d6eab1.png)
- Cart will be empty. Items can be added to cart by clicking `Add to Cart` btn on top right corner of every product.
- Vendor can also directly add item to cart by scanning the qr code on the product by clicking `Scan to Add` btn in the cart. A pop-up will show. After scanning QR code, item will automatically be added to cart. (A dummy QR code is provided in the QR code folder of this repository. Do scan the QR code for checking)
![Screenshot (34)](https://user-images.githubusercontent.com/39340406/191017165-8e83635c-6f31-43fb-baa0-c4c6a9316a60.png)
![Screenshot (35)](https://user-images.githubusercontent.com/39340406/191017204-390be26d-a1d1-4828-8720-41817561033d.png)
- To checkout, click on `Checkout` btn. Vendor has to fill the customer details like Name, Phone Number, E-mail address and if the purchase is store purchse or home delivery. Customer can pay via card or cash.
![Screenshot (36)](https://user-images.githubusercontent.com/39340406/191017823-c3c01f48-7d9c-41bb-b651-6313011e01f3.png)
![Screenshot (37)](https://user-images.githubusercontent.com/39340406/191017840-b282c8a7-d6af-4acc-8b04-28aa62d9af42.png)
- After successfull payment, the order receipt will be mailed to the customer's provided email id.
![Screenshot (38)](https://user-images.githubusercontent.com/39340406/191018214-461e83b5-a77f-4085-9c18-5e4473dd9f45.png)
