import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Environment } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCw, Layers, Maximize2, MousePointer2, Info } from 'lucide-react'
import { ConstructionModel } from './ConstructionModel'
import { ConstructionModelB } from './ConstructionModelB'
import { ConstructionModelC } from './ConstructionModelC'
type Tab = '3d' | '3dB' | '3dC' | '2d' | '2dB' | '2dC'

export function ConstructionShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>('3d')
  const [autoRotate, setAutoRotate] = useState(true)
  return (
    <div className="min-h-screen w-full bg-[#FDFCF8] text-stone-800 font-sans selection:bg-orange-100 selection:text-orange-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              Project Visualization
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-tight">
              Experience the Space
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Switch between technical 2D schematics and immersive 3D
              walkthroughs to fully understand the architectural flow and
              spatial relationships.
            </p>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 overflow-hidden"
        >
          {/* Custom Tabs Header */}
     <div className="border-b border-stone-100 px-6 pt-6">
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide py-2">

          {/* 3D Tabs */}
          <TabButton
            isActive={activeTab === '3d'}
            onClick={() => setActiveTab('3d')}
            icon={<div className="w-3 h-3" />}
            label="3D Floor Plan"
            small
          />

          <TabButton
            isActive={activeTab === '3dB'}
            onClick={() => setActiveTab('3dB')}
            icon={<div className="w-3 h-3" />}
            label="3D House Plan"
            small
          />

          <TabButton
            isActive={activeTab === '3dC'}
            onClick={() => setActiveTab('3dC')}
            icon={<div className="w-3 h-3" />}
            label="3D Commercial"
            small
          />

          {/* Divider */}
          <div className="w-px h-5 bg-stone-300 mx-2 opacity-50"></div>

          {/* 2D Tabs */}
          <TabButton
            isActive={activeTab === '2d'}
            onClick={() => setActiveTab('2d')}
            icon={<Layers className="w-3 h-3" />}
            label="2D Floor Plan"
            small
          />

          <TabButton
            isActive={activeTab === '2dB'}
            onClick={() => setActiveTab('2dB')}
            icon={<Layers className="w-3 h-3" />}
            label="2D House Plan"
            small
          />

          <TabButton
            isActive={activeTab === '2dC'}
            onClick={() => setActiveTab('2dC')}
            icon={<Layers className="w-3 h-3" />}
            label="2D Commercial"
            small
          />

        </div>
      </div>




          {/* Viewport Area */}
          <div className="relative h-[600px] bg-stone-50/50">
            <AnimatePresence mode="wait">
              {/* 2D View */}
              {activeTab === '2d' && (
                <motion.div
                  key="2d"
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-stone-200 p-4 flex items-center justify-center overflow-hidden group">
                    {/* Placeholder for 2D Image */}
                    <div className="absolute inset-0 bg-[url('/img-6.jpg')] bg-cover bg-center opacity-90 grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-stone-900/5" />
                    {/* <div className="relative bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-stone-200 shadow-sm">
                      <p className="text-stone-600 font-medium text-sm flex items-center gap-2">
                        <Maximize2 className="w-4 h-4" />
                        High-Resolution Schematic
                      </p>
                    </div> */}
                  </div>
                </motion.div>
              )}
              {activeTab === '2dB' && (
                <motion.div
                  key="2dB"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-stone-200 p-4 flex items-center justify-center overflow-hidden group">
                    {/* Floor Plan 2D Image */}
                    <div className="absolute inset-0 bg-[url('/img-9.jpg')] bg-cover bg-center opacity-90 grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-stone-900/5" />
                  </div>
                </motion.div>
              )}
              {activeTab === '2dC' && (
                <motion.div
                  key="2dC"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  <div className="relative w-full h-full bg-white rounded-xl border border-stone-200 p-4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/img-10.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" />
                    <div className="absolute inset-0 bg-stone-900/5" />
                  </div>
                </motion.div>
              )}

              {/* 3D View */}
              {activeTab === '3d' && (
                <motion.div
                  key="3d"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute inset-0"
                >
                  {/* Floating Controls */}
                  <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
                    <ControlPanel
                      autoRotate={autoRotate}
                      setAutoRotate={setAutoRotate}
                    />
                  </div>

                  {/* Canvas */}
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{
                      position: [4, 2, 5],
                      fov: 45,
                    }}
                  >
                    <Environment preset="city" />
                   <Stage environment="city" intensity={0.5}>
                    <ConstructionModel />
                    </Stage>
                   
                    <OrbitControls
                      autoRotate={autoRotate}
                      autoRotateSpeed={1.5}
                      enableZoom={true}
                      enablePan={false}
                      minPolarAngle={0}
                      maxPolarAngle={Math.PI / 2}
                    />
                  </Canvas>

                  {/* Overlay Instructions */}
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <div className="flex items-center gap-4 text-xs font-medium text-stone-400 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200/50 shadow-sm">
                      <span className="flex items-center gap-1.5">
                        <MousePointer2 className="w-3 h-3" />
                        Drag to rotate
                      </span>
                      <span className="w-px h-3 bg-stone-300" />
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3" />
                        Scroll to zoom
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === '3dB' && (
                <motion.div
                  key="3dB"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Floating Controls */}
                  <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
                    <ControlPanel autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
                  </div>

                  {/* Canvas */}
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [4, 2, 5], fov: 45 }}
                  >
                    <Environment preset="sunset" />
                    <Stage environment="sunset" intensity={0.7}>
                      <ConstructionModelB /> 
                      {/* You can replace with a different model if you want */}
                    </Stage>

                    <OrbitControls
                      autoRotate={autoRotate}
                      autoRotateSpeed={1.2}
                      enableZoom={true}
                      enablePan={false}
                      minPolarAngle={0}
                      maxPolarAngle={Math.PI / 2}
                    />
                  </Canvas>

    {/* Instructions Overlay */}
    <div className="absolute bottom-6 left-6 pointer-events-none">
      <div className="flex items-center gap-4 text-xs font-medium text-stone-400 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200/50 shadow-sm">
        <span className="flex items-center gap-1.5">
          <MousePointer2 className="w-3 h-3" />
          Drag to rotate
        </span>
        <span className="w-px h-3 bg-stone-300" />
        <span className="flex items-center gap-1.5">
          <Maximize2 className="w-3 h-3" />
          Scroll to zoom
        </span>
      </div>
    </div>
  </motion.div>
)}
{activeTab === '3dC' && (
  <motion.div
    key="3dC"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0"
  >
    <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
      <ControlPanel autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
    </div>

    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [4, 2, 5], fov: 45 }}
    >
      <Environment preset="dawn" />
      <Stage environment="dawn" intensity={0.6}>
        <ConstructionModelC /> {/* You will create this component OR reuse B */}
      </Stage>

      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.2}
        enableZoom={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  </motion.div>
)}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
// Subcomponents
function TabButton({
  isActive,
  onClick,
  icon,
  label,
  small,
}: {
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  small?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 
        whitespace-nowrap 
        rounded-full 
        px-4 ${small ? 'py-1.5 text-xs' : 'py-2 text-sm'} 
        transition-all duration-300 
        border 
        ${isActive 
          ? 'bg-orange-600 text-white border-orange-600 shadow-sm' 
          : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
        }
      `}
    >
      {icon}
      {label}
    </button>
  )
}

function ControlPanel({
  autoRotate,
  setAutoRotate,
}: {
  autoRotate: boolean
  setAutoRotate: (v: boolean) => void
}) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-stone-200/50 p-2 rounded-2xl shadow-lg flex flex-col gap-2">
      <ControlButton
        active={autoRotate}
        onClick={() => setAutoRotate(!autoRotate)}
        tooltip="Auto Rotate"
      >
        <RotateCw
          className={`w-5 h-5 ${autoRotate ? 'animate-spin-slow' : ''}`}
        />
      </ControlButton>
    </div>
  )
}
function ControlButton({
  children,
  onClick,
  active,
  tooltip,
}: {
  children: React.ReactNode
  onClick: () => void
  active?: boolean
  tooltip: string
}) {
  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center ${active ? 'bg-orange-50 text-orange-600 shadow-inner' : 'bg-transparent text-stone-600 hover:bg-stone-100'}`}
    >
      {children}
    </button>
  )
}
