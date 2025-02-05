'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, InputPassword } from '@/components/ui/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form className="my-8 space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputPassword {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox />
            <label htmlFor="remember" className="text-sm text-muted-foreground">
              Manter conectado
            </label>
          </div>
          <Link href="/forgot-password" className="text-sm hover:text-primary">
            Esqueceu sua senha?
          </Link>
        </div>

        <Button type="submit" className="btn-steel-900 w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}
