import {Settings as set} from "../core/constants/settings";
export default class DonateForm  {
    #donateForm
    #title
    #totalAmount
    constructor(totalAmount, method) {
        this.createNewDonate = method
        this. #totalAmount = totalAmount
        this.#donateForm = document.createElement('form')
        this.#donateForm.className = 'donate-form'
        this.#title = document.createElement('h1')
    }

    updateTotalAmount(newAmount){
        return this.#title.textContent = `${newAmount} ${set.currency}`
    }


    #handleSubmit=(event)=>{
        event.preventDefault()
        // console.log(event.target.amount.value)
        const newDonate = {
            amount: event.target.amount.value ,
            date: new Date()
        }
        // console.log(this.createNewDonate)
        this.createNewDonate(newDonate)
        event.target.amount.value = ''

    }
    render(){
        // console.log(this.createNewDonate)
        this.#donateForm.addEventListener('submit',this.#handleSubmit)
        this.#title.id  = 'total-amount'
        this.#title.textContent = `${this.#totalAmount}  ${set.currency}`

        const formLabel = document.createElement('label')
        formLabel.className = 'donate-form__input-label'
        formLabel.textContent = 'Введите сумму в $'

        const formInput = document.createElement('input')
        formInput.className = 'donate-form__donate-input'
        formInput.name = 'amount'
        formInput.type = 'number'
        formInput.max = '100'
        formInput.min = '0'
        formInput.required = true
        formLabel.append(formInput)

        const formButton = document.createElement('button')
        formButton.className = 'donate-form__submit-button'
        formButton.type = 'submit'
        formButton.textContent = 'Задонатить'

        this.#donateForm.append(this.#title, formLabel, formButton)
        return this.#donateForm
    }
}