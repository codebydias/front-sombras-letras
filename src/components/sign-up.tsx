import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignUpForm = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({ resolver: zodResolver(schema) });

  const [autoLogin, setAutoLogin] = useState(false);

  const onSubmit = async (data: SignUpForm) => {
    try {
    
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        data
      );

      toast.success("Conta criada com sucesso!", {
        description: response.data.message,
        
      });

      if (autoLogin) {
        const loginResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/signin`,
          {
            email: data.email,
            password: data.password,
          }
        );

        toast.success("Bem-vindo!", {
          description: loginResponse.data.message,
        });
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Erro ao criar conta. Tente novamente.";

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
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Seu nome completo"
          className="bg-[#1a1a1a] border border-gray-700 focus:border-red-600 text-white"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          {...register("email")}
          placeholder="seu@email.com"
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
          {...register("password")}
          placeholder="••••••••"
          className="bg-[#1a1a1a] border border-gray-700 focus:border-red-600 text-white"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <Checkbox
          checked={autoLogin}
          onCheckedChange={(checked) => setAutoLogin(Boolean(checked))}
          id="autoLogin"
        />
        <Label htmlFor="autoLogin" className="text-sm">
          Entrar automaticamente após criar conta
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 bg-red-700 hover:bg-red-800 text-white font-semibold transition"
      >
        {isSubmitting ? "Criando..." : "Criar Conta"}
      </Button>
    </form>
  );
}
