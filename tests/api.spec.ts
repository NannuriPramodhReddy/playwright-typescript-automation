import {test,expect} from "@playwright/test"

test("get deatail",async({request})=>{
    const response = await request.get("https://reqres.in/api/users/2")

    await expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body)
})
console.log("test 2")

test("post user",async({request})=>{
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            
  "name": "morpheus",
  "job": "leader"
}
        
    })

    await expect(response.status()).toBe(201)
    const body =await response.json();
    console.log(body)
})