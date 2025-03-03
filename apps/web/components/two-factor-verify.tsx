import {useState} from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {Button} from '@halycon/ui/components/button'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@halycon/ui/components/card'
import {Form, FormControl, FormField, FormItem, FormMessage} from '@halycon/ui/components/form'
import {InputOTP, InputOTPGroup, InputOTPSlot} from '@halycon/ui/components/input-otp'

const formSchema = z.object({
	code: z.string().length(6, 'Please enter a valid 6-digit code')
})

export const TwoFactorVerify = ({onVerify, onCancel}: { onVerify: (code: string) => Promise<void>, onCancel: () => void }) => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			code: ''
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setIsLoading(true)
			await onVerify(values.code)
		} catch (err) {
			form.setError('code', {
				message: err instanceof Error ? err.message : 'Invalid verification code'
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Card className="w-full max-w-md mx-auto">
			<CardHeader>
				<CardTitle>Two-Factor Authentication</CardTitle>
				<CardDescription>
					Enter the verification code from your authenticator app
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="code"
							render={({field}) => (
								<FormItem>
									<FormControl>
										<InputOTP
											maxLength={6}
											value={field.value}
											onChange={field.onChange}
										>
											<InputOTPGroup className="w-full justify-between">
												<InputOTPSlot index={0} className="w-12 h-12" />
												<InputOTPSlot index={1} className="w-12 h-12" />
												<InputOTPSlot index={2} className="w-12 h-12" />
												<InputOTPSlot index={3} className="w-12 h-12" />
												<InputOTPSlot index={4} className="w-12 h-12" />
												<InputOTPSlot index={5} className="w-12 h-12" />
											</InputOTPGroup>
										</InputOTP>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex space-x-2">
							<Button
								type="submit"
								disabled={isLoading || !form.formState.isValid}
								className="flex-1"
							>
								Verify
							</Button>
							<Button
								type="button"
								onClick={onCancel}
								variant="outline"
								disabled={isLoading}
							>
								Cancel
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
