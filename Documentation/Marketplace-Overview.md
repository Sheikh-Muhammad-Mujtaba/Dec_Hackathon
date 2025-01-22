# LUXEWALK

LUXEWALK is a general e-commerce website that offers a diverse range of meticulously crafted garments, including ladies' suits and shoes, designed to cater to various styles and preferences.

## Data Schema

### **[Product]**
```json
{
    "_id": "string",
    "slug": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "priceWithoutDiscount": "number",
    "discountPercentage": "number",
    "rating": "number",
    "stockLevel": "number",
    "tags": ["string"],
    "sizes": ["string"],
    "colors": ["string"],
    "images": ["url"],
    "reviews": [
        {
            "name": "string",
            "review": "string",
            "rating": "number",
            "date": "string"
        }
    ]
}
```

### **[Order]**
```json
{
    "orderId": "string",
    "productPrice": "number",
    "quantity": "number",
    "name": "string",
    "price": "number",
    "color": "string",
    "size": "string"
}
```

### **[Customer]**
```json
{
    "customerId": "string",
    "contact": "string",
    "name": "string",
    "address": "string",
    "orderId": "string"
}
```

### **[Delivery Zones]**
```json
{
    "zoneName": "string",
    "coverageArea": "string",
    "estimatedTime": "string"
}
```

![Screenshot](/screenshots/page1.jpg) 
![Screenshot](/screenshots/page2.jpg) 
![Screenshot](/screenshots/page3.jpg) 
![Screenshot](/screenshots/page4.jpg) 