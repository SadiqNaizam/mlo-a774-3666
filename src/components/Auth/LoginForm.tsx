import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define the validation schema for the login form using Zod
const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A form component for user authentication.
 * Includes fields for username and password, validation, and a submit button.
 * Built with react-hook-form, Zod, and Shadcn UI components.
 */
const LoginForm: React.FC<LoginFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Define the submit handler which simulates an API call
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log('Login attempt with:', values);

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle success (e.g., redirect)
      // or failure (e.g., form.setError or show a toast).
    }, 1500);
  };

  return (
    <div className={cn('flex flex-col space-y-6', className)} {...props}>
      <h1 className="text-3xl font-bold tracking-tight text-card-foreground">
        Log in
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} disabled={isLoading} />
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
                <FormLabel className="sr-only">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="w-full !mt-6">
            {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log in
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-muted-foreground">
        or, sign up
      </p>
    </div>
  );
};

export default LoginForm;
