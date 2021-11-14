import {getFormattedTime} from "../core/__helpers";
export default class DonateList {
    #donatesContainer
    #donatesList
    #donates
    #title
    constructor(donates) {
        this.#title =document.createElement('h2')
        this.#title.className = 'donates-container__title'
        this.#title.textContent = 'Список донатов'
        this.#donates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'
        this.#donatesList = document.createElement('div')
        this.#donatesList.className = 'donates-container__donates'
        this.#donatesContainer.append(this.#title,this.#donatesList)
    }
    updateDonates(updatedDonates){
        this.#donatesList.length = 0
        const extra = updatedDonates[updatedDonates.length-1]
        this.#donatesList.append(this.#createDonateElement(extra))
    }
    #createDonateElement(donate){
        const donateItem = document.createElement('div')
        donateItem.className = 'donate-item'
        donateItem.textContent = getFormattedTime(donate.date)

        const donateAmount = document.createElement('b')
        donateAmount.textContent = ` - ${donate.amount}`

        donateItem.append(donateAmount)
        return donateItem
    }
    render(){
        this.#donates.forEach((donate)=>{
            this.#donatesList.append(this.#createDonateElement(donate))
        })
        this.#donatesContainer.append(this.#donatesList)
        return this.#donatesContainer
    }}