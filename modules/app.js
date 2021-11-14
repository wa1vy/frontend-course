import DonateForm from "./donate-form";
import DonateList from "./donate-list";
import * as utils from '../core/__helpers/index'
import {mockDonates} from "../core/__helpers/dummy-data";
export default class App {
    #form
    #list
    #state
    constructor() {
        this.#state = {
            donates : mockDonates,
            totalAmount: this.#calcDonates()
        }
        this.#form = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))
        this.#list = new DonateList(this.#state.donates)
    }
    #calcDonates(){
        let numbers = []
        mockDonates.forEach(item =>{
           numbers.push(item.amount)
        })
        return utils.calculateSumOfNumbers(numbers)
        // console.log(utils.calculateSumOfNumbers(numbers))
    }


    createNewDonate(newDonate){
        this.#state.donates.push(newDonate)
        //console.log('state donates',this.#state.donates)
        this.#state.totalAmount += Number(newDonate.amount)
        this.#list.updateDonates(this.#state.donates)
        this.#form.updateTotalAmount( this.#state.totalAmount)
    }
    run(){
        this.#calcDonates()
        const donateListHTML = this.#list.render()
        const donateFormHTML = this.#form.render()
        document.body.append(donateFormHTML, donateListHTML)
    }
}