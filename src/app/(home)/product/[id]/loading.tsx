import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="grid w-full max-w-[1180px] grid-cols-2 gap-20">
      <Skeleton className="aspect-square rounded-2xl" />
      <div className="flex h-full flex-col gap-14">
        <div className="flex flex-col gap-4 text-4xl">
          <Skeleton className="h-10 w-72 rounded-2xl" />
          <Skeleton className="h-10 w-32 rounded-2xl" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-96" />
          <Skeleton className="h-4 w-96" />
          <Skeleton className="h-4 w-96" />
          <Skeleton className="h-4 w-52" />
        </div>
        <Skeleton className="mt-auto h-16 rounded-2xl py-5" />
      </div>
    </main>
  )
}
