import Image from 'next/image'
import logo from '@halycron/ui/media/logo.svg'
import {Metadata} from 'next'
import {GetStartedButton} from '@/app/(site)/get-started-button'
import {ArrowUpRight} from 'lucide-react'

export const metadata: Metadata = {
	title: 'Halycron – The Ultimate Private & Secure Photo Vault',
	description: 'Halycron is a highly secure, end-to-end encrypted photo storage solution. Store, organize, and manage your photos in your personal or private S3 bucket with zero-knowledge encryption. Keep your memories safe—only you can access them.',
	keywords: [
		'secure photo vault',
		'private photo storage',
		'encrypted photo storage',
		'self-hosted photo backup',
		'S3 photo storage',
		'end-to-end encrypted gallery',
		'secure cloud storage',
		'private photo album',
		'security-focused photo manager'
	]
}

const Page = () => (
	<div className="flex justify-center min-h-svh relative py-16 pt-32 px-4 bg-neutral-950">
		<div className="max-w-[800px] w-full flex flex-col gap-10 items-center">
			<Image src={logo} alt="Halycron Logo" className="w-44"/>

			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="font-semibold text-6xl text-center leading-tight">Truly private photo storage on cloud</h1>

				<p className="text-lg opacity-60 leading-normal text-center max-w-[80%]">
					Halycron is a <em className="font-serif font-medium">secure, private</em> photo vault designed to keep
					your memories safe. With advanced end-to-end encryption, album protection, and complete control over
					your storage, your photos remain yours—hidden, locked, and accessible only to you.
				</p>
			</div>

			<div className="flex flex-col items-center gap-4">
				<GetStartedButton />

				<a href="https://github.com/pingSubhajit/halycron?tab=readme-ov-file" target="_blank" className="flex items-center gap-1 hover:underline underline-offset-8 opacity-60 hover:opacity-100 focus-visible:opacity-100 transition-opacity" rel="noreferrer">
					<span className="font-medium">Check the source code on <em className="font-serif">Github</em></span>
					<ArrowUpRight className="w-4 h-4" />
				</a>
			</div>

			<div className="mt-10 space-y-4">
				<p className="font-medium text-base">What?</p>
				<div className="grid grid-cols-2 gap-8">
					<div className="space-y-2">
						<p className="font-medium text-sm">E2E encryption</p>
						<p className="text-sm opacity-60 leading-normal">We encrypt your photos with AES-256-GCM algo
							and
							layer that with bucket encryption of S3.</p>
					</div>

					<div className="space-y-2">
						<p className="font-medium text-sm">Per user encryption</p>
						<p className="text-sm opacity-60 leading-normal">Every user has their own encryption-decryption
							strategy. Keys are encrypted securely too.</p>
					</div>

					<div className="space-y-2">
						<p className="font-medium text-sm">Mandatory MFA</p>
						<p className="text-sm opacity-60 leading-normal">Two factor authentication and strong password
							is a
							requirement for each account, inconvenient but secure.</p>
					</div>

					<div className="space-y-2">
						<p className="font-medium text-sm">Zero-knowledge architecture</p>
						<p className="text-sm opacity-60 leading-normal">Nobody except you can decrypt your photos, even
							those with the physical access of the server.</p>
					</div>
				</div>
			</div>

			<div className="mt-10 space-y-4">
				<p className="font-medium text-base">Why?</p>
				<p className="text-sm opacity-60 leading-normal">I believe that privacy is not a privilege — it’s a
					right. In an age where our memories are scattered across the cloud, buried in algorithms, and
					vulnerable to
					prying eyes, we’ve lost control over what should be ours alone. Halycron was born from the
					frustration of not having a truly private space for our most personal moments. Existing solutions
					promise security but come with compromises: hidden terms, backdoors, or the uneasy feeling that your
					data is never entirely yours.</p>
				<p className="text-sm opacity-60 leading-normal">I built Halycron for those who want peace of mind, not
					just convenience. A place where your photos stay locked away unless you decide otherwise. A place
					where trust isn’t assumed but proven through encryption, protection, and control. Every image you
					store here is yours—untouched, untracked, and inaccessible to anyone but you. Because privacy isn’t
					something you should have to ask for. It should be the default.</p>
			</div>
		</div>
	</div>
)

export default Page
