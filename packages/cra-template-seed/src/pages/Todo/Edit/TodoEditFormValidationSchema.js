import * as yup from 'yup';

const TodoEditFormValidationSchema = yup.object({
  name: yup.string().required().max(25, 'This field must have maximum 25 characters'),
  description: yup.string().required().max(255, 'This field must have maximum 255 characters'),
  completed: yup.boolean(),
});

export default TodoEditFormValidationSchema;
