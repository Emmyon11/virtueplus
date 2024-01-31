import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

const auth = (req: Request) => ({ id: 'fakeId' }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return { fileUrl: file.url };
  }),
  docUploader: f({ pdf: { maxFileCount: 1 } }).onUploadComplete(
    async ({ metadata, file }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileUrl: file.url };
    }
  ),
  // Example "profile picture upload" route - these can be named whatever you want!
  profilePicture: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return { fileUrl: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
