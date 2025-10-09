import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";
import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon } from "lucide-react";

export default function Auth() {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] px-4 py-16">
        <div className="w-full max-w-sm bg-[#0d0d0d]/80 backdrop-blur-md border border-[#1f1f1f] rounded-2xl shadow-2xl p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white border mb-3">
              <Moon />
            </div>
            <h1 className="text-2xl font-semibold text-white">
              SOMBRAS <span className="text-red-800 ">& LETRAS</span>
            </h1>
            <p className="text-sm text-gray-400">
              Sua jornada literária nos aguarda nas sombras
            </p>
          </div>

          <Tabs defaultValue="sign-in" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-full bg-[#1a1a1a] p-1 mb-6">
              <TabsTrigger
                value="sign-in"
                className="data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-full text-gray-300 transition"
              >
                Entrar
              </TabsTrigger>
              <TabsTrigger
                value="sign-up"
                className="data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-full text-gray-300 transition"
              >
                Criar Conta
              </TabsTrigger>
            </TabsList>

            {/* Login */}
            <TabsContent value="sign-in">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="grid gap-4">
                  <SignIn />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cadastro */}
            <TabsContent value="sign-up">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="grid gap-4">
                  <SignUp />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Rodapé poético */}
          <p className="text-xs text-center text-gray-500 mt-8 italic">
            “Nas páginas encontramos reflexos de nossa própria alma”
          </p>
        </div>
      </div>
    </>
  );
}
