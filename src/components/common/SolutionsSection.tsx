import type React from "react"
import { ChevronDown } from "lucide-react"

const SolutionsSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="space-y-4 p-8 border rounded-lg">
        <h3 className="text-xl font-semibold">Netex Cloud</h3>
        <p className="text-muted-foreground">
          A comprehensive learning ecosystem that scales with your organization's needs.
        </p>
        <a href="/solutions/netex-cloud" className="text-sm font-medium inline-flex items-center">
          Learn more <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
        </a>
      </div>
      <div className="space-y-4 p-8 border rounded-lg">
        <h3 className="text-xl font-semibold">Netex Studio</h3>
        <p className="text-muted-foreground">
          Create bespoke, engaging content tailored to your specific learning objectives.
        </p>
        <a href="/solutions/netex-studio" className="text-sm font-medium inline-flex items-center">
          Learn more <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
        </a>
      </div>
      <div className="space-y-4 p-8 border rounded-lg">
        <h3 className="text-xl font-semibold">Virtual College</h3>
        <p className="text-muted-foreground">
          Access our extensive on-demand course catalogue covering essential workplace skills.
        </p>
        <a href="/solutions/virtual-college" className="text-sm font-medium inline-flex items-center">
          Learn more <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
        </a>
      </div>
    </div>
  )
}

export default SolutionsSection

