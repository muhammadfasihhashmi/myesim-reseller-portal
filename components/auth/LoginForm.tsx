"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import authHero from "@/public/authHero.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { loginFormSchema, LoginFormSchemaType } from "@/lib/zod/LoginSchema";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: loginUserApi, isPending } = useMutation({
    mutationFn: async (credentials: LoginFormSchemaType) => {
      const res = await signIn("credentials", {
        ...credentials,
        redirect: false,
      });
      console.log(res);

      if (res?.error) {
        throw new Error(res.error);
      }
      return res;
    },
    onSuccess: () => {
      toast.success("login successfull");
      form.reset();
      router.push("/");
      // here we add redirect logic
    },
    onError: (error) => {
      const message =
        error.message === "CredentialsSignin"
          ? "Invalid email or password."
          : "Something went wrong. Please try again.";

      toast.error(message);
      form.reset();
    },
  });

  async function onSubmit(credentials: LoginFormSchemaType) {
    loginUserApi(credentials);
  }

  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2 items-center">
        <div className="bg-muted relative hidden md:block h-112 ">
          <Image
            src={authHero}
            alt="auth hero image"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
          <FieldGroup>
            <h1 className="text-3xl font-bold">sign in</h1>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    placeholder="user@example.com"
                    className="focus:ring-0! focus:border-primary-background!"
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="••••••••"
                    id={field.name}
                    className="focus:ring-0! focus:border-primary-background!"
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="w-37.5 font-semibold hover:text-primary-background hover:underline cursor-pointer">
              <Link href={"#"}>Forgot Password ?</Link>
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary-background hover:bg-primary-background/90 cursor-pointer h-11 text-lg"
            >
              {isPending ? <Spinner /> : "Login"}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
export default LoginForm;
