import * as yup from 'yup'

export const chatSchema = yup.object().shape({
    content: yup.string().required('Kindly type a message to continue')
})