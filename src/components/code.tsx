export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className='rounded border border-cb-dusty-blue bg-cobalt p-4'>
      {children}
    </pre>
  )
}
