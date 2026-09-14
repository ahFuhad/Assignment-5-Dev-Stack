import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.info("All technologies removed.");
  };

  const isAdded = (id: number) => {
    return stack.some((item) => item.id === id);
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-356.25 px-6 py-16 md:px-24 md:py-20"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-400 md:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Technology Cards */}
        <div>
          {loading ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-75 rounded-2xl border border-slate-100 bg-slate-50"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex min-h-75 flex-col rounded-2xl border border-slate-100 bg-white p-5"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-10 w-10 object-contain"
                    />

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {technology.name}
                  </h3>

                  {/* Paragraph */}
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                    {technology.description}
                  </p>

                  {/* Information */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">
                      {technology.category}
                    </span>

                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">
                      {technology.difficulty}
                    </span>

                    <span className="ml-auto text-sm font-medium text-slate-600">
                        {technology.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => addToStack(technology)}
                    disabled={isAdded(technology.id)}
                    className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                      isAdded(technology.id)
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isAdded(technology.id)
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Your Stack */}
        <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          {/* Stack Heading */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Your Stack
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {stack.length} {stack.length === 1 ? "technology" : "technologies"}{" "}
                selected yet.
              </p>
            </div>

            {stack.length > 0 && (
              <button
                onClick={removeAll}
                className="text-xs font-medium text-red-500 hover:text-red-600"
              >
                Remove All
              </button>
            )}
          </div>

          {/* Empty Stack */}
          {stack.length === 0 ? (
            <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
              <p className="text-sm text-slate-400">
                Your stack is empty.
              </p>

              <p className="mt-1 text-xs text-slate-300">
                Add technologies to build your stack.
              </p>
            </div>
          ) : (
            /* Selected Technologies */
            <div className="mt-5 space-y-3">
              {stack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                >
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-8 w-8 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {technology.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromStack(technology.id)}
                    className="text-lg leading-none text-slate-300 transition hover:text-red-500"
                    aria-label={`Remove ${technology.name}`}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

export default TechnologySection;