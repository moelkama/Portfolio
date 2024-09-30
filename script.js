function scrollToImage(imageId) {
            console.log(imageId);
            const imageScroll = document.querySelector('.image-scroll');
            const image = document.getElementById(imageId);
            const index = Array.from(imageScroll.children).indexOf(image);
            
            // Scroll to the selected imaged).style.display = 'grid';
            imageScroll.style.transform = `translateX(-${index * 110}%)`;
        
            // Update active point
            const points = document.querySelectorAll('.point');
            points.forEach(point => point.classList.remove('active'));
            points[index].classList.add('active');
        }
        
        // Initialize active point
        document.addEventListener('DOMContentLoaded', () => {
            const points = document.querySelectorAll('.point');
            points[0].classList.add('active'); // Set first point as active by default
        });