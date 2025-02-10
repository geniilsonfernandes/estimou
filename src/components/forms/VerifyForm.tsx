'use client'

import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const verifySchema = z.object({
  email: z.string().email(),
})

export const VerifyForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  console.log(token);
  
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(verifySchema),
  })

  const onSubmit = (data: z.infer<typeof verifySchema>) => {
    console.log(data)
  }
  return (
    <div>
      <Form {...form}>
        <form className="w-64 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

          <Button type="submit" className='w-full'>Enviar email</Button>
        </form>
      </Form>
    </div>
  )
}
