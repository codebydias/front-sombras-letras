/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@/contexts/user-context";

const signInSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "Senha incorreta"),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });
  const { login } = useUser();

  const onSubmit = async (data: SignInForm) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        data,
        { withCredentials: true }
      );

      login(response.data.user.email ?? response.data.user);

      toast.success("Login realizado com sucesso!", {
        description: response.data.message,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Erro ao realizar login. Tente novamente.";

      toast.error("Ops! Algo deu errado 😕", {
        description: message,
      });

      console.error("Erro ao criar conta:", message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 text-gray-200"
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          {...register("email")}
          className="bg-[#1a1a1a] border border-gray-700 focus:border-red-600 text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          className="bg-[#1a1a1a] border border-gray-700 focus:border-red-600 text-white"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm">
        <a href="#" className="text-red-500 hover:underline">
          Esqueceu a senha?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 bg-red-700 hover:bg-red-800 text-white font-semibold transition"
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}
