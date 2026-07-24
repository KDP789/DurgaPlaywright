module.exports = class APiUtils
{

constructor (apiContext,loginPayload)
    {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

async getToken()
{
    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
data : this.loginPayload
})
const loginResponseJson = await loginResponse.json();
const token = loginResponseJson.token;
return token;
}

async createOrder(orderPayload)
{
    let response = {}
    response.token = await this.getToken();
const OrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
    data : orderPayload,
    headers : {
        'authorization' : response.token,
        'Content-Type' : 'application/json'
    }

})

const OrderResponseJson = await OrderResponse.json();
console.log(OrderResponseJson);
const OrderID =  OrderResponseJson.orders[0]

response.OrderID=OrderID
return response;
}


}