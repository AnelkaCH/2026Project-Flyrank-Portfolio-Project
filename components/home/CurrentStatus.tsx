import Win95Window from "@/components/ui/Win95Window";

const statusItems = [
  {
    id: "accelist-internship",
    label: "accelist-internship",
    status: "operational",
    description: "full stack dev, .NET/React/Vue, since July 2026",
    color: "#008000",
  },
  {
    id: "flyrank-backend",
    label: "flyrank-backend",
    status: "operational",
    description: "Node/Express, Docker, Postgres track",
    color: "#008000",
  },
  {
    id: "sc-900-exam",
    label: "sc-900-exam",
    status: "in progress",
    description: "voucher secured, not yet scheduled",
    color: "#b8860b",
  },
  {
    id: "sutd-sept-2026",
    label: "sutd-sept-2026",
    status: "scheduled",
    description: "relocation + matriculation, ETA Sept 8, 2026",
    color: "#000080",
  },
] as const;

interface CurrentStatusProps {
  className?: string;
}

export default function CurrentStatus({ className = "" }: CurrentStatusProps) {
  return (
    <div className={`w-full ${className}`}>
      <Win95Window title="C:\STATUS.EXE" className="h-full">
        {/* Header Row */}
        <div className="flex items-center gap-2 mb-3 px-1 shrink-0">
          <span
            className="inline-block w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: "#b8860b" }}
          />
          <span className="text-xs sm:text-sm font-bold text-black uppercase truncate">
            SYSTEM STATUS: PARTIALLY OPERATIONAL
          </span>
        </div>

        {/* Inset Screen Panel */}
        <div
          className="p-3 bg-white text-black flex-1 flex flex-col justify-between"
          style={{
            borderStyle: "inset",
            borderWidth: "2px",
            borderColor: "#808080 #ffffff #ffffff #808080",
          }}
        >
          <div className="space-y-4 flex-1 flex flex-col justify-around">
            {statusItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-3 last:pb-0 border-b border-dashed border-gray-200 last:border-0"
              >
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-44">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                </div>
                <div className="flex flex-row items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span
                    className="text-[10px] sm:text-xs uppercase font-bold shrink-0 px-1 py-0.5"
                    style={{ color: item.color }}
                  >
                    [{item.status}]
                  </span>
                  <span className="text-xs text-gray-700 truncate">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Win95Window>
    </div>
  );
}