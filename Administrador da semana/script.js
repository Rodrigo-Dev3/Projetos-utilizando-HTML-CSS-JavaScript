const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '01-10', '01-06'],
    dog: ['01-03'],
    journal: ['01-04']

}

nlwSetup.setData(data)
nlwSetup.load()