import { useEffect, useRef, useState } from 'react';

function MouseFollower() {
    const followerRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animFrameId;
        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

            const el = followerRef.current;
            if (el) {
                el.style.left = `${pos.current.x - 15}px`;
                el.style.top = `${pos.current.y - 15}px`;
            }

            animFrameId = requestAnimationFrame(animate);
        };

        animFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animFrameId);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div
            ref={followerRef}
            style={{
                position: 'fixed',
                width: '30px',
                height: '30px',
                background: '#ffffff69',
                borderRadius: '50%',
                pointerEvents: 'none',
                transition: `
                    width 0.3s cubic-bezier(.3, 0, .3, 1),
                    height 0.3s cubic-bezier(.3, 0, .3, 1),
                    background 0.3s cubic-bezier(.3, 0, .3, 1),
                    margin 0.3s cubic-bezier(.3, 0, .3, 1),
                    border-color 0.7s cubic-bezier(.3, 0, .3, 1)
                `,
                zIndex: 9999,
            }}
        />
    );
}

export default MouseFollower;
