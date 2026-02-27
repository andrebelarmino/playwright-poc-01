import { test, expect } from '@playwright/test';

test.describe.only(`API Request - Intercetpion`, async () => {
    test(`Verify the Req body consists of valid email or not`, async ({ page }) => {
        //go to the side
        await page.goto("https://thinking-tester-contact-list.herokuapp.com/")
        await page.locator("#signup").click()
        await expect(page).toHaveURL("https://thinking-tester-contact-list.herokuapp.com/addUser")
        const emailID = "abcd@gmail.com"

        await page.locator("#firstName").fill("dinesh")
        await page.locator("#lastName").fill("RJ")
        await page.locator("#email").fill(emailID)
        await page.locator("#password").fill("abcd@123!")

        // creat API response interception promise 
        const adduserapireqpromise = page.waitForRequest((request) => {
            return request.url() === "https://thinking-tester-contact-list.herokuapp.com/users" && request.method() === "POST"
        })
        await page.locator("#submit").click()
        // wait for promise to resolve
        const adduserapireq = await adduserapireqpromise
        const adduserapireqJson = await adduserapireq.postDataJSON()
        expect(adduserapireqJson.email, `expect req body to have email ${emailID}`).toBe(emailID)
    })
})