import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import InputError from "@/Components/InputError";
import { Label } from "@/shadcn/ui/label";

export default function AuthForm({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // 2. Define a submit handler.
    const submit = (e) => {
        e.preventDefault();

        post(route("admin.login"));
    };

    return (
        <div>
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submit} className="space-y-8">
                <div>
                    <Label
                        htmlFor="email"
                        // className={`${errors.email ? "text-red-500" : ""}`}
                    >
                        Your email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                    <Label
                        htmlFor="password"
                        // className={`${errors.password ? "text-red-500" : ""}`}
                    >
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <Button type="submit" disabled={processing}>
                    Submit
                </Button>
            </form>
        </div>
    );
}
