import * as yup from 'yup';

export const SignUpFormSchema = yup.object({
    userName: yup.string().required(),
    fullName: yup.string().required(),
    email: yup.string().required().email(),
    avatarImage: yup.mixed().test("required", "You need to provide a Image", (file) => {
        if(file.length > 0 || file) {
            return true;
        }
        return false;
    }),
    password: yup.string().required("Password is Required Field").min(8, "Password must be at least 8 Characters"),
    experience: yup.number().required().typeError("This field should contain Number").min(1, "You should have at least 1 year of Experience").max(60, "You are too old to do this Job"),
    bio: yup.string().required("Bio is Required Field").min(100, "At least 100 Characters Required").max(300, "Maximum 300 Characters"),
    city: yup.string().required(),
    sold: yup.number().required().typeError("This field should contain Number").min(1, "You should have at least sold 1 Property"),
    specialization: yup.string().oneOf(["commercial", "residential"]).required()
});

export const LoginFormSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required("Password is Required Field").min(8, "Password must be at least 8 Characters")
});