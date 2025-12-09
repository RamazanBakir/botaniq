export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Layout Test Page</h1>
      
      <div className="space-y-8">
        {/* Test 1: Basic max-width container */}
        <section className="bg-red-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Test 1: max-w-7xl container</h2>
          <div className="mx-auto max-w-7xl bg-blue-200 p-4">
            <p>This text should be in a max-width container (80rem / 1280px)</p>
            <p>If this wraps on every word, there is a CSS issue.</p>
          </div>
        </section>
        
        {/* Test 2: Flex layout */}
        <section className="bg-green-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Test 2: Flex row</h2>
          <div className="flex gap-4">
            <div className="flex-1 bg-yellow-200 p-4">Flex item 1 - should take equal space</div>
            <div className="flex-1 bg-orange-200 p-4">Flex item 2 - should take equal space</div>
          </div>
        </section>
        
        {/* Test 3: Grid layout */}
        <section className="bg-purple-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Test 3: Grid 3 columns</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-pink-200 p-4">Grid item 1</div>
            <div className="bg-pink-300 p-4">Grid item 2</div>
            <div className="bg-pink-400 p-4">Grid item 3</div>
          </div>
        </section>
        
        {/* Test 4: Text wrapping */}
        <section className="bg-gray-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Test 4: Normal text</h2>
          <p className="max-w-prose">
            This is a paragraph of text that should wrap normally at word boundaries, not after every single word. 
            If you see each word on its own line, there is definitely a CSS width issue affecting the layout.
            The quick brown fox jumps over the lazy dog.
          </p>
        </section>
        
        {/* Test 5: CSS Variables */}
        <section className="bg-teal-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Test 5: CSS Variables</h2>
          <div style={{ maxWidth: '80rem', margin: '0 auto', backgroundColor: 'lightcoral', padding: '1rem' }}>
            <p>This uses inline style with maxWidth: 80rem</p>
          </div>
        </section>
      </div>
    </div>
  );
}

