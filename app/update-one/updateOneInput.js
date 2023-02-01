"use client"

import React from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

//Icon
import { MdSystemUpdateAlt } from "react-icons/md"

//Styles
import styles from "app/styles/min/UpdateMe.module.css";

//Component
import { updateOne } from "../components/crud-todos";

const UpdateOneInput = ({id}) => {
    const router = useRouter()

    const {register,
        formState: { errors },
        handleSubmit,
        reset} = useForm({ defaultValues: {id} })

        const submitHandler = async(data) => {
            // console.log(data)
            await updateOne(data)
            reset()
            router.push("/")
        }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit(submitHandler)}>
      <input type="text" name="todo" autoComplete="off" required {...register("todo", { pattern: /^[A-z0-9 -.,üöäàéè@=:/;!?¨(\r\n|\r|\n)+]+$/i })} />
      <div className={styles.submit} onClick={handleSubmit(submitHandler)}> <MdSystemUpdateAlt /></div>
      <p className={styles.error}>{ errors.todo?.type === "pattern" && "Accept only Alphabet and Number!!!"}</p>
    </form>
  );
};

export default UpdateOneInput;
