import { useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    let submission = await fetch('/api/addToEmailList', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (submission.ok) {
      submission = await submission.json()
      setEmail('')
      setSubmitting(false)
      setDone(true)
    } else {
      setSubmitting(false)
      setError('Something went wrong')
    }
  }

  return (
    <div className="flex flex-col items-left">
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row items-left gap-y-2 sm:gap-x-2 mb-1"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="font-mono border-none rounded-none outline-none bg-white px-2 w-full h-10 md:w-72 md:h-auto text-black"
        ></input>
        <button
          type="submit"
          className="font-mono bg-white py-2 sm:px-2 font-bold hover:scale-105 transform transition
        disabled:opacity-50 disabled:hover:scale-100 text-black md:w-40 text-center"
          disabled={email.length === 0}
        >
          {submitting ? '•••' : 'Get a reminder'}
        </button>
      </form>
      {error ? (
        <p role="alert" className="text-sm">
          Something went wrong—please try again. If you keep seeing this, send
          an email to mstanciu@purdue.edu.
        </p>
      ) :
      done ? (
        <p role="status" className="text-sm">
          ✉️ 🚀 Thanks! You’re on the list.
        </p>
      ) : null
      }
    </div>
  )
}
