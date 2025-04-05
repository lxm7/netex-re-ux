import type React from "react"

const ClientLogos: React.FC = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-xl font-medium text-muted-foreground">Trusted by leading organizations worldwide</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-12 w-24 relative grayscale opacity-70 transition-opacity hover:opacity-100">
            <div className="w-full h-full flex items-center justify-center border rounded">
              <span className="text-sm text-muted-foreground">Client {i}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ClientLogos

