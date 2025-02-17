import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar } from '@radix-ui/react-avatar'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Icon } from '@/components/Icon'
import { Pencil } from '@/components/icons'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { initials } from '@/utils/utils'

export type Profile = {
  avatar: string
  firstName: string
  lastName: string
  username: string
  email: string
  dateOfBirth: Date | string
  presentAddress: string
  permanentAddress: string
  city: string
  postalCode: string
  country: string
}

export type FormConfig = {
  name: string
  label: string
  variant: 'input' | 'date-picker'
  type?: React.ComponentProps<'input'>['type']
  placeholder: string
  description?: string
}

export interface EditProfileSettingsProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

const formConfigs = [
  {
    name: 'name',
    label: 'Your Name',
    variant: 'input',
    type: 'text',
    placeholder: 'Greg Anatomy',
    description: undefined as string | undefined,
  },
  {
    name: 'username',
    label: 'Username',
    variant: 'input',
    type: 'text',
    placeholder: '@greg',
  },
  {
    name: 'email',
    label: 'Email',
    variant: 'input',
    type: 'email',
    placeholder: 'greganatomy@gmail.com',
  },
  {
    name: 'password',
    label: 'Password',
    variant: 'input',
    type: 'password',
    placeholder: '**********',
  },
  {
    name: 'dob',
    label: 'Date of Birth',
    variant: 'date-picker',
    type: 'date',
    placeholder: 'dd/mm/yyyy',
  },
  {
    name: 'presentAddress',
    label: 'Present Address',
    variant: 'input',
    type: 'text',
    placeholder: 'San Jose, California, USA',
  },
  {
    name: 'permanentAddress',
    label: 'Permanent Address',
    variant: 'input',
    type: 'text',
    placeholder: 'San Jose, California, USA',
  },
  {
    name: 'city',
    label: 'City',
    variant: 'input',
    type: 'text',
    placeholder: 'San Jose',
  },
  {
    name: 'postalCode',
    label: 'Postal Code',
    variant: 'input',
    type: 'text',
    placeholder: '45961',
  },
  {
    name: 'country',
    label: 'Country',
    variant: 'input',
    type: 'text',
    placeholder: 'USA',
  },
] as const satisfies Array<FormConfig>

const formSchema = z.object({
  name: z.string(),
  username: z.string().min(3, { message: 'Username cannot be less than 3 characters' }),
  email: z.string().email({ message: 'A valid email address is expected' }),
  password: z.string().min(8, { message: 'Password cannot be less than 8 characters' }).readonly(),
  dob: z.string().date(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
})

export const EditProfileSettings: React.FC<EditProfileSettingsProps> = ({
  className,
  profile,
  ...props
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: profile.firstName + ' ' + profile.lastName,
      username: profile.username,
      password: '**********',
      dob:
        typeof profile.dateOfBirth === 'string'
          ? profile.dateOfBirth
          : profile.dateOfBirth.toISOString(),
      email: profile.email,
      presentAddress: profile.presentAddress,
      permanentAddress: profile.permanentAddress,
      city: profile.city,
      postalCode: profile.postalCode,
      country: profile.country,
    },
  })

  const userInitials = initials(profile.firstName, profile.lastName)

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div
      data-composition="EditProfileSettings"
      className={cn(
        'flex flex-col items-center lg:items-start lg:flex-row py-8 lg:p-8 gap-12 w-full',
        className,
      )}
      {...props}
    >
      <div className="w-25 h-25 relative shrink-0">
        <Avatar className="rounded-full overflow-hidden">
          <AvatarImage className="w-25 h-25" src={profile.avatar} alt={userInitials.join('')} />
          <AvatarFallback className="w-25 h-25 font-bold text-4xl">
            {userInitials.join('')}
          </AvatarFallback>
        </Avatar>

        <Button
          className="rounded-full size-7 absolute right-0 bottom-0"
          size="icon"
          aria-label="Edit Profile Photo"
        >
          <Icon scale={0.9}>
            <Pencil className="size-auto" />
          </Icon>
        </Button>
      </div>

      <div className="w-full">
        <Form {...form}>
          <form
            className="flex flex-col lg:grid lg:grid-cols-2 gap-6 xl:gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {formConfigs.map((cfg) => {
              return (
                <FormField
                  key={cfg.name}
                  control={form.control}
                  name={cfg.name}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{cfg.label}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={cfg.placeholder}
                            type={cfg.type}
                            rootProps={{ className: 'h-10 lg:h-12 w-full max-w-full' }}
                            readOnly={cfg.type === 'password'}
                            {...field}
                          />
                        </FormControl>
                        {'description' in cfg && cfg.description && (
                          <FormDescription>{cfg.description}</FormDescription>
                        )}
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              )
            })}

            <Button className="col-span-2 justify-self-end lg:w-49 h-10 lg:h-12" type="submit">
              Save
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

EditProfileSettings.displayName = 'EditProfileSettings'
